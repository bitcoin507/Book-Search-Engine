//  Resolvers Define the query and mutation functionality to work with the Mongoose models

const {User, Book} = require('./models');

const resolvers = {
    Query: {
      Users:async () => {
        return await User.find();
        },
        User: async (_, {id}) => {
            return await User.findById(id);
            },
        Books: async () => {
            return await Book.find();
            }
    },
    Mutation: {
        createUser: async (_, {input}) => {
            const user = new User(input);
            await user.save();
            return user;
            }
    },
    User: {
        savedBooks: async (user) => {
            return await Book.find({
                user: user._id
            });
        }
    }
}

        


    

module.exports = resolvers;
