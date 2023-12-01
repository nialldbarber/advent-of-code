use std::fs;
use std::collections::HashMap;

pub fn get_data() -> String {
    let data = fs::read_to_string("./src/data.txt").expect("Error reading file");
    return data;
}

pub fn determine_win(args: &str) {
    let mut hm = HashMap::new();
    let formatted = args.split(" ").take(2).collect::<Vec<&str>>();
    let (opponent, me) = (formatted[0], formatted[1]);

    hm.insert("X", 1);
    hm.insert("Y", 2);
    hm.insert("Z", 3);

    let total = &mut hm.get(&me);

    if let Some(t) = total {
        let mut internal_total = &mut t;
        println!("{:?}", t);

        // Rock
        if opponent == "A" {
            if me == "X" {
                **internal_total += 3;
            } else if me == "Y" {
                **internal_total += 6;
              } else {
                **internal_total += 0;
              }
        }

        // Paper
        if opponent == "B" {
            if me == "X" {
                **internal_total += 0;
            } else if me == "Y" {
                **internal_total += 3;
            } else {
                **internal_total += 6;
            }
        }

        // Scissors
        if opponent == "C" {
            if me == "X" {
                **internal_total += 6;
            } else if me == "Y" {
                **internal_total += 0;
            } else {
                **internal_total += 3;
            }
        }
    }
}

fn main() {
    let total = 0;
    let data = get_data();
    let formatted_data: Vec<&str> = data.split("\n").collect();
    
    for item in formatted_data {
        determine_win(item);
        // total += running_total;
    }
    println!("{}", total);
    determine_win("hello");
}
