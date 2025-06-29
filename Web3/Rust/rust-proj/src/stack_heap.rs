//visit after a few days and explain what u studied here

//for now leave it like this



pub fn run() {
    stack_fn();
    heap_fn();
    update_string();
}

fn stack_fn() {
    let a = 10;
    let b = 20;
    let c = a + b;
    println!("Stack function: Sum of {} and {} is {}", a, b, c);
}

fn heap_fn() {
    let s1 = String::from("Hello");
    let s2 = String::from("World");
    let combined = format!("{} {}", s1, s2);
    println!("Heap function: Combiend string is '{}'", combined);
}

fn update_string() {
    //base string
    let mut s = String::from("initial string");
    println!("Before update: {}", s);
    println!(
        "Capcity: {}, Length: {}, pointer: {:p}",
        s.capacity(),
        s.len(),
        s.as_ptr()
    );

    //after appendign
    for _ in 0..100 {
        s.push_str(" and some additinal text");
        println!(
            "Capcity: {}, Length: {}, pointer: {:p}",
            s.capacity(),
            s.len(),
            s.as_ptr()
        );
        // println!("After Udpate: {}", s);
    }
}
