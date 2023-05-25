class User {
    constructor(id, name) {
        this.id = id
        this.name = name
    }

    hasAccess() {
        return this.name === 'Bob'
    }
}

class NullUser {
    constructor() {
        this.id = -1;
        this.name = 'Guest';
    }

    hasAccess() {
        return false;
    }
}

const users = [
    new User(1, 'Bob'),
    new User(2, 'John')
]

function getUser(id) {
    const user = users.find(user => user.id === id);

    if (user == null) {
        return new NullUser()
    }

    return user;
}

function printUser(id) {
    const user = getUser(id)

    /*
      We need to explicitly tell the console.log to print `Guest` if the user does not have a name
  
      This is problematic since we need to remember to always put this every time we use the users name
  
      It is also bad because if we want to print `Unknown User` instead, we would need to change every place that we put `Guest` which will most likely be all over the application
    */
    console.log('Hello ' + user.name)

    /*
      This will throw an error if we don't first check that the user object has this function available and isn't null.
    
      This is a lot of extra code to add in every time we want to check user access, and could cause bugs that are easy to miss if we forget to do the null checks.
    */
    if (user != null && user.hasAccess != null && user.hasAccess()) {
        console.log('You have access', name)
    } else {
        console.log('You are not allowed here', name)
    }
}

users.push(new User(3, "manh"))
users.push(new User(4))
console.log(getUser(6)) // NullUser { id: -1, name: 'Guest' }