enum Direction {
    North,
    East,
    South,
    West,
}

enum Shape {
    Circle(f64),
    Square(f64),
    Rectangle(f64, f64),
}

fn calc_area(shape: Shape) -> f64 {
    //here can be where we take values and then calc it and then return the values.
    //now ponder here how to do that

    //one standard way would be
    /*
       if(let shape==Shape::Circle((radius))){
       return 3.14*radius*circle
       }
    */
    // above is one way
    //another we introduce here is pattern matching

    let ans = match shape {
        Shape::Circle(radius) => 3.14 * radius * radius,
        Shape::Rectangle(width, height) => width * height,
        Shape::Square(side) => side * side,
    };

    return ans;
}

pub fn run() {
    move_around(Direction::North);

    let circle = Shape::Circle(5.0);
    let square = Shape::Square(5.0);
    let rectangle = Shape::Rectangle(5.0, 7.8);

    // calc_area(circle); this is the standard ownership issue here eitehr we can clone the circle or the below code will have to pass the full value which is
    // let area= calc_area(Shape::Circle(5.0));
    let area = calc_area(circle);
    print!("Area of circle is: {}\n", area)
}

fn move_around(direction: Direction) {}

/*

why do u need enums when u can just pass values norammly
enums enforeces strictness

*/
