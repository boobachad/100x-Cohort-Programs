pub fn run() {
    let s1 = String::from("hello");
    // let s2 = s1; this will cause an error sicne the values is being mvoer over
    let s2 = &s1; //but if we use the reference value instaewd of the actual value

    println!("{}", s2);
    println!("{}", s1);

    let mut s3 = String::from("Hello");
    update_str(&mut s3);
    println!("{}", s3);

    //this after the new knolwedge gained about burrowing

    let mut a1 = String::from("buddy");
    let a2 = &mut a1;
    // let a3=&a1; uncomment these 2 to see erorr
    //here the error will be that since u have already burrowed a refernce with intnetions of mutating it then u cant have any other burrows
    // println!("{}",a1);
    // update_word(&mut a1);this too will throw error
    println!("{}", a2);

    //so unlimited immutable burrowing but if burrowing mutable refernce then u cant burrow anything else rest will be deemed void and throw error if there are the chances of more than on eburrwoing

    // ponder: so can u burrow nestedly.
}

//why burrowing concpet due to limitation of ownership we dsicussed ealier

//mutable references you have to pass &mut not just declare it mut once but you have will to pass mut even where u take the refernce telling the compiler that u will be amking changes to it.
// else it iwll throw eror
fn update_str(s: &mut String) {
    s.push_str(" WOrld");
}

/*Rules of borrowing

There can me many immutable references at the same time
but but
There can be only one mutable reference  at a time

If there is a mutable reference , you can’t have another immutable reference either. meaning if there is one mutable refrecne then u wont be able to have naything other including both immutable and mutable.

This to avoid any data races/inconsistent behaviour

to avoid race conditions

If someone makes an immutable reference , they don’t expect the value to change suddenly
If more than one mutable references happen, there is a possibility of a data race and synchronization issues
*/
//lets see anoteher example after the new knowledge

fn update_word(word: &mut String) {
    word.push_str("World");
}
