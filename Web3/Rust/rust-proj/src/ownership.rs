pub fn run() {
    create_str();

    //another way to see the wonership change

    let mut my_string = String::from("hello");
    my_string = takes_owenership(my_string);
    // println!("{}",my_string);this line here would cause error since the ownership has been passed over so my_string is invalied now

    //now after we have transfered the ownership back this will not result in error
    println!("{}", my_string);
}
//one way to see the ownership change
fn create_str() {
    let s1 = String::from("Hi there");
    println!("{}", s1);
    let s2 = s1;
    // println!("{}",s1) it will lead to burrow over error
    println!("{}", s2);
}

fn takes_owenership(some_string: String) -> String {
    println!("{}", some_string); //now the owenership has been passed onto some_string from mystring

    //now lets says we want to change the owner again to previous one then how?
    return some_string;


    //now this is weird hack of ownership change where there is short span wehn the owenr is change and then again returned to the oringinal owner.
    //to fix this we do something called burrowing and refrencing meaning there is still the owner its doesnt get dangled means the value still stays with it but someone can now burrow that value by actually getting the refrecnes of values not the actual values

    //now rememebr the concpet of pass by value and pass by refrence

    //we will study this in burrow and references
}

//dangling pointer
//double free erros

//ownership: at a time only one owner but if the the owner is deallocated then the value will automatically deallaocted immeditately
//simialr to that rihana example

/*
    let s1 = String::from("hello");
    now if i write
    let s2=s1;
    this line will not copy d1 into s2 but this line what it will do is point to same memroy locaton in heap as the s1 is doing

    now ehre is the ownership concpet prevails.
    here we see that 2 owners are pointing to same location.
    but what if one owner deallocates and as the rule says if owners dealloacted then values also but if it deallaocted the value then what will the s2 pointing to so it becomes what we call dangling pointer.

    so what rust does it at a time there can only be owner
    so when we do
    let s2=s1;
    the ownership gets passed over to s2 and now the s1 is no loneger pointing to its value.

    this ownership is the most problematic in most of the progmming langs.
    errors like:
        dangling pointers
        double free errros
    origiante here msotly

    by rules here i mean the rust has this ownership checks which are slow since they are so many but it is good since it manages the memory

    if u see the burrow over error jsut check the debugging message it will say the possible solution is clone
    but it also says that clone is expensive since it will copy the data and thne point to it.

    study double free errors later
*/
