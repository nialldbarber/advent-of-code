use std::fs;

fn main() {
    let mut total = 0;
    let mut highest_score: Vec<i32> = Vec::new();
    let data = fs::read_to_string("./src/data.txt").expect("Error reading file");

    let formatted_data: Vec<&str> = data.split("\n").collect();

    for item in formatted_data {
        if item != "" {
            total += item.parse::<i32>().unwrap();
        } else {
            highest_score.push(total);
            total = 0;
        }
    }

    highest_score.sort();
    println!("{:?}", highest_score.last());
}
