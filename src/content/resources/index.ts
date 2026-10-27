import type { Resource } from "../schema";
import { communityResources } from "./community";
import { learningResources } from "./learning";
import { natureResources } from "./nature";
import { philosophyResources } from "./philosophy";
import { relationshipResources } from "./relationships";
import { selfResources } from "./self";
import { societyResources } from "./society";
import { workResources } from "./work";

export const resources: Resource[] = [
  ...selfResources,
  ...relationshipResources,
  ...natureResources,
  ...philosophyResources,
  ...learningResources,
  ...societyResources,
  ...workResources,
  ...communityResources,
];
