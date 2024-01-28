public class FieldSetSampleContoller {
    public Case caseObj {get;set;}
    public List<String> fieldSet {get;set;}
    public FieldSetSampleContoller(){
        caseObj = new Case();
        fieldSet = new List<String>();
        for(schema.FieldSetMember memberObj:sobjectType.Case.FieldSets.Sample_Field_Set.getFields()){
            fieldSet.add(memberObj.getFieldPath());
        }
    }
    public pageReference saveRecord(){
        insert caseObj;
        return new pageReference('/'+caseObj.id);
    }
}