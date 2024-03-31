class Exercise {
    constructor(name, numberofSets, description) {
        this.name = name;
        this.numberofSets = numberofSets;
        this.description = description;
    }

    display() {
        return `${this.name}, ${this.numberofSets}, ${this.description}`;
    }
}

class FitnessMenu {
    constructor() {
        this.exercises = [];
    }

    addExercise(exercise) {
        this.exercises.push(exercise);
    }

    deleteExercise(index) {
        if (index >= 0 && index < this.exercises.length) {
            this.exercises.splice(index, 1);
            return true;
        } else {
            return false;
        }
    }

    displayExercises() {
        let menuString = '';
        for (let i = 0; i < this.exercises.length; i++) {
            menuString += i + ') ' + this.exercises[i].name + '\n';
        }
        alert(menuString);
    }
}

class Menu {
    constructor() {
        this.fitnessMenu = new FitnessMenu();
        this.selectedExercise = null;
    }

    start() {
        let selection;
        do {
            selection = this.showMainMenuOptions();
            switch (selection) {
                case '1':
                    this.createExercise();
                    break;
                case '2':
                    this.viewExercise();
                    break;
                case '3':
                    this.deleteExercise();
                    break;
                case '4':
                    this.displayExercise();
                    break;
                default:
                    alert('Invalid selection.');
                    break;
            }
        } while (selection !== '0');
        alert('Goodbye!');
    }

    showMainMenuOptions() {
        return prompt(`
            0) Exit
            1) Create Exercise
            2) View Exercise
            3) Delete Exercise
            4) Display All Exercises
        `);
    }

    createExercise() {
        let name = prompt('Enter Exercise Name');
        let numberofSets = prompt('Enter Number of Sets');
        let description = prompt('Enter Exercise Description');
        this.fitnessMenu.addExercise(new Exercise(name, numberofSets, description));
    }

    viewExercise() {
        let index = prompt('Enter the index of the exercise you wish to view');
        if (index >= 0 && index < this.fitnessMenu.exercises.length) {
            this.selectedExercise = this.fitnessMenu.exercises[index];
            alert(this.selectedExercise.display());
        } else {
            alert('Invalid exercise index.');
        }
    }

    deleteExercise() {
        let index = prompt('Enter the index of the exercise you wish to delete');
        if (this.fitnessMenu.deleteExercise(index)) {
            alert('Exercise deleted successfully.');
        } else {
            alert('Invalid exercise index.');
        }
    }
}

let menu = new Menu();
menu.start();
