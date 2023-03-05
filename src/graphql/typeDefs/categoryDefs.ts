export const categoryDefs=`
type Category{
    catID: ID! @id
    name: String!
    description:String!
    items:[Item!]! @relationship (type:"Has",direction:OUT)
    
   
}
`;

