use std::fs;

// enum Result<A,B>{
//     Ok(A),
//     Err(B),
// } inbuilt in rust

pub fn run() {
    let res = fs::read_to_string("example.txt");

    match res {
        Ok(content) => {
            println!("File cotnent: {}", content);
        }
        Err(err) => {
            println!("Erorr: {}", err);
        }
    }
    println!("hi ello");

    /*
        let res1 = read_from_file_unsafe("example.txt".to_string());

        if u run this above code it will show some panick erorr meaning the below line will nenver et a chance to run

        print!("hi there");
    */

    let res1 = read_from_file_unsafe("example.txt".to_string());

    match res1 {
        Ok(content) => {
            println!("Success:  {}", content);
        }
        Err(err) => {
            println!("Failed:  {}", err);
        }
    }

    //search about the null being billion dollar mistake.
    /*
    so rust cam up with option enum which states a value is null when it doesnt have any datatype meaning nothing jsut None.

    pub enum Option<T>{
    None,
    Some(T)
    }

    so when u wnat to return null u jsut return None
     */

    let my_string = String::from("hallo");
    let res3 = find_first_a(my_string);
    match res3 {
        Some(index) => println!("Letter a is found at index: {}", index),
        None => println!("The letter a is not found in the string"),
    }
}

fn find_first_a(s: String) -> Option<usize> {
    for (index, character) in s.chars().enumerate() {
        if character == 'a' {
            return Some(index as usize);
        }
    }
    return None;
}

// fn read_from_file_unsafe(file_content: String) -> String {
fn read_from_file_unsafe(file_content: String) -> Result<String, String> {
    let res1 = fs::read_to_string("example.txt");

    // return res1.unwrap(); instead of this a better way is
    if let Ok(content) = res1 {
        return Ok(content);
    } else {
        return Err("Error reading file".to_string());
    }
}

//popular enums are result and option feel free to look for more
