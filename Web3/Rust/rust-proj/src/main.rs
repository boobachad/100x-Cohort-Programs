mod burrow_references;
mod cargo_packages_deps;
mod enums_patternMatch;
mod error_handling;
mod ownership;
mod stack_heap;
mod structs;

fn main() {
    println!("Hello, world!");

    let x = 5; //by default it assigns 32 signed bit integer
    // we knwo what is signed and unsigned
    //from 8, 16, 32, 64, 128 for both signed(i64) and unsigned(u32)
    //sort desc unsigned i.e u is alwyas +ive menaing u cant assign -ive value to it. and for any sing use signed i.e i
    let y: u32 = 1000;
    let z: f32 = 1000.00001; //for decimal another is f64

    print!("x: {}, y: {}, z: {}", x, y, z);

    // let mut a: i8=100;//gernally all the values are non-mutable in rust meaning u cant make changes them once assigned first. to change we to sepcifically tell that it is mutable by doing "mut"
    //in short
    // all variables are immutable by default

    // for i in 0..1000{
    //     a = a+100;//see thiss is a clear case of overflow since we assinged a integr a 8bit meaning 127 limit but here in the for loop we are going overboard the limit it will compile meaning build this file but wehn we run it will clearly overflow
    // }

    // print!("x={}",a);

    let is_male = true;
    let is_above_18 = true;

    if is_male {
        println!("You are a male");
    } else {
        println!("you are something else maybe another a gender");
    }

    if is_male && is_above_18 {
        println!("you are a legal male");
    }

    // let art = "sfsdfsdf";

    //most complex is string
    // since in above one we clealry stated theri size for memory to take.
    // but in string it si diff. lets say if we want to make chanegs to the existing string then what if more then it will ask memory for space which is not avialbale to it. so this can create a issue

    //for eg
    // for i in 0..100{
    //     art =art+"adfasdfsa";
    // } this code is not correct just for represneation

    //many wasyy to initialize string

    let greeting: String = String::from("Hello world");

    println!("{}", greeting);

    //will be more clear in nums or further in the chapter

    // let char1= greeting.chars().nth(10000);throw error see below
    let char1 = greeting.chars().nth(1);

    println!("char1: {}", char1.unwrap()); //will prpbably throw error not allowed by rust meaning it gives warning to devs that yes either it can be a char or either it can be nothing which is unsafe or extemrely dangerous.

    // but can do
    // this the rust will allow
    // match char1{
    //     Some(c)=>println!("{}",c),
    //     None => println!("No character at index 1000"),
    // }   //ingore the match arm body error here since those are similar to those if else statemetns where if there is only line in if condition we dont weeirte braces.
    //read about some rules in rust about when to put ";" this.

    //condtional, loops

    //only diff we dont need parenthesis for conditions

    let is_even = true;

    if is_even {
        println!("is even");
    } else if !is_even {
        println!("not even it is odd");
    }

    for i in 0..10 {
        println!("{}", i);
    }

    //to iterate over
    //we gernarlly iterate over arrays, maps, strings
    // eg

    //learn to irerate over via googling vistit stackoverlfow

    let sentence = String::from("my name is this");
    let first_word = get_first_word(sentence);
    print!("first word is:  {}", first_word);

    let a1 = 10;
    let b1 = 23;
    let sum = do_sum(a1, b1);
    println!("sum of {} and {} is {}", a1, b1, sum);

    //stack vs heap code in the stack_heap module. i have imported it

    stack_heap::run();

    //ownership module
    ownership::run();

    //burrowing and references
    burrow_references::run();

    //strcuts
    structs::run();

    //enums
    enums_patternMatch::run();

    //error handling
    error_handling::run();

    // cargo, packages and external dependencies
    cargo_packages_deps::run();
}

fn do_sum(a1: i32, b1: i32) -> i32 {
    return a1 + b1;
}

//one of the iterator
fn get_first_word(sentence: String) -> String {
    //one thing important here in rust we have to tell what datatype of both arguemtn and return type also. like here i did for argument aslo and then returning will also be a string very imp
    let mut ans = String::from("");

    for char in sentence.chars() {
        ans.push_str(char.to_string().as_str());
        if char == ' ' {
            break;
        }
    }
    return ans;
}
