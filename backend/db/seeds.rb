# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Project.destroy_all
Log.destroy_all
Goal.destroy_all
Task.destroy_all

test1 = Project.create(title: "Test 1")
test2 = Project.create(title: "Test 2")

goal1a = test1.goals.create!(description: "Goal 1a")
goal1b = test1.goals.create!(description: "Goal 1b")

task1a = goal1a.tasks.create!(description: "task 1a")
task1b = goal1a.tasks.create!(description: "task 1b")

log = test1.logs.create!(content: "log test for Test 1")


