export const businessDefs=`
type Business{
    bID: ID! @id
    bName: String!
    categories:[Category!]! @relationship (type:"Has",direction:OUT)
}
`
;


