/*
Just like the nodejs ecosystem has npm, the rust ecosystem has cargo

Cargo is a package manager for rust, which means we can use it to bring packages (crates in case of rust) to our projects

to use a certain crate just like npm install we first add the pacakges or here crates and them
use the import statement i.e use crate name


*/

use rand::{Rng, rng};

pub fn run() {
    let mut rng = rng();
    let n: u32 = rng.random();
    println!("Random number: {}", n);
}
