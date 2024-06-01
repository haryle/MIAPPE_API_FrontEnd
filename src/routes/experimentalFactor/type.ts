import { SchemaElementType } from "../../components";
import { VariableSchema } from "../variable";

class ExperimentalFactorType extends VariableSchema {
  factorDescription: SchemaElementType = { type: "text" };
  factorValue: SchemaElementType = { type: "text" };
  factorTypeId: SchemaElementType = {
    type: "select",
    fetcherKey: "vocabulary",
    labelKey: "factorType",
  };
}

const ExperimentalFactorSchema = new ExperimentalFactorType();

export { ExperimentalFactorType, ExperimentalFactorSchema };
