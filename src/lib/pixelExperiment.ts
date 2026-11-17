export type ExperimentVariant = "A" | "B"
const EXPERIMENT_KEY =
"pixel11pro_cta_copy_v1";
export function getExperimentVariant(): ExperimentVariant {
const savedVariant = sessionStorage.getItem(EXPERIMENT_KEY)
if (savedVariant === "A" || savedVariant === "B") {
    return savedVariant;
}
const variant: ExperimentVariant = Math.random() < 0.5 ? "A" : "B"
sessionStorage.setItem(EXPERIMENT_KEY,variant);
return variant;
}

