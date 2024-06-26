import { SchemaElementType, BaseSchema } from "../../components";

class InstitutionType extends BaseSchema {
  name: SchemaElementType = { type: "text", labelKey: "name", required: true };
  country: SchemaElementType = { type: "text" };
  institutionTypeId: SchemaElementType = {
    type: "select",
    required: false,
    labelKey: "InstitutionType",
    fetcherKey: "vocabulary",
  };
  parentId: SchemaElementType = {
    type: "select",
    required: false,
    labelKey: "parentInstitution",
    fetcherKey: "institution",
    titleKey: "name",
    multiple: true,
  };
}

const InstitutionSchema = new InstitutionType();

export { InstitutionType, InstitutionSchema };
