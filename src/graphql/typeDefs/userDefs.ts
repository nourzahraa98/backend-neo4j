export const userDefs = `
type User{
    id: ID! @id
    name: String!
    email: String!
    password: String! @auth(rules: [{ allow: { id: "$jwt.sub" } }]) @private
    userType: String!
    phone: String
    profileUrl: String
    language: String
    location: Point
    businesses:[Business!]!@relationship(type:"OWNS",direction:OUT)
} 
`;



