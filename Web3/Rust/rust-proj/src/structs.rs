struct User {
    active: bool,
    username: String,
    email: String,
    age: u32,
    sign_in_count: u64,
}
struct rectangle {
    width: u32,
    height: u32,
}

impl rectangle {
    fn area(&self) -> u32 {
        self.width * self.height
        //dont worry about return both are same
        // return self.width * self.height;
    }

    fn perimeter(&self) -> u32 {
        2 * (self.width + self.height)
    }
}

pub fn run() {
    let user1 = User {
        active: true,
        username: String::from("someuser123"),
        email: String::from("user@email.com"),
        sign_in_count: 1,
        age: 34,
    };
    println!("User 1 user name: {:?}", user1.username);
    println!("{} is {} years old", user1.username, user1.age);

    //lets implemetn rectangle
    let rectSample = rectangle {
        width: 30,
        height: 50,
    };
    println!("the area of rectangle is {}", rectSample.area());

    println!("the perimeter of rectangle is {}", rectSample.perimeter());
}

/*ponder tuple struct, unit strcut
also
https://projects.100xdevs.com/tracks/rust-bootcamp/Rust-Bootcamp-15

in this refre the side quest leaning about traits


*/
