import Title from "@/components/ui/title";
import React from "react";

interface Comment {
  id: number;
  name: string;
  date: string;
  avatar: string;
  text: string;
  replies?: Comment[];
}
const comments: Comment[] = [
  {
    id: 1,
    name: "Devon Lane",
    date: "28 April 2024",
    avatar: "/images/blogs/comment-user-1.png",
    text: "As the world continues to fight COVID-19 some property owners are searching for way they can improve the Neque porro quisquam est, qui is dolor emr ipsum quia dolor sit amet the consec tetur is adipisci velit.",
    replies: [
      {
        id: 11,
        name: "Jenny Wilson",
        date: "28 April 2024",
        avatar: "/images/blogs/comment-user-2.png",
        text: "As the world continues to fight COVID-19 some property owners are searching for way they can improve the Neque",
      },
    ],
  },
  {
    id: 2,
    name: "Courtney Henry",
    date: "28 April 2024",
    avatar: "/images/blogs/comment-user-3.png",
    text: "As the world continues to fight COVID-19 some property owners are searching for way they can improve the Neque porro quisquam est, qui is dolor emr ipsum quia dolor sit amet the consec tetur is adipisci",
  },
];

import Image from "next/image";

const CommentCard = ({
  comment,
  isReply = false,
}: {
  comment: Comment;
  isReply?: boolean;
}) => {
  return (
    <div className={`flex md:flex-row flex-col gap-6 ${isReply ? "md:ml-28 ml-10 mt-8" : "mt-17.5"}`}>
      {/* Avatar */}
      <div className="w-[105px] h-[105px] rounded-lg shrink-0">
        <Image
          src={comment.avatar}
          alt={comment.name}
          width={105}
          height={105}
          className="rounded-lg object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="">
          <h4 className="font-medium text-lg">{comment.name}</h4>
          <span className="text-sm text-[#B0B5BB]">{comment.date}</span>
        </div>

        <p className="mt-0.5 text-light-dark leading-[160%] max-w-[720px]">
          {comment.text}
        </p>

        <button className="mt-5 text-blue text-lg leading-[160%] font-medium hover:underline">
          Reply
        </button>
      </div>
    </div>
  );
};

const CommentDisplay = () => {
  return (
    <div className="mt-20 max-w-[870px] mx-auto px-4">
      <Title asChild size="36">
        <h3>Comments (5)</h3>
      </Title>

      <div className="mt-10">
        {comments.map((comment) => (
          <div key={comment.id}>
            <CommentCard comment={comment} />

            {comment.replies?.map((reply) => (
              <CommentCard key={reply.id} comment={reply} isReply />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentDisplay;
