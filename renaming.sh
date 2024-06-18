#!/bin/bash
for dir in day_*; do
    new_name=$(echo $dir | sed -r 's/day_([0-9]+)/\1_day/')
    mv "$dir" "$new_name"
done

