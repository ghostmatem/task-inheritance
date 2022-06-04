interface IPersonData {
    name: string;
    secondName: string;
    age: number;
}

interface IStudentData extends IPersonData {
    phone: string;
}

/*
1. Напишите конструктор, который принимает в качестве параметра объект с интерфейсом IPersonData
2. Добавьте метод getData(), возвращающий объект, соответствующий интерфейсу IPersonData
 */
export class Person {
    constructor(personData: IPersonData) {
        this._name = personData.name;
        this._secondName = personData.secondName;
        this._age = personData.age;
    }

    public getData(): IPersonData {
        return {
            name: this._name,
            age: this._age,
            secondName: this._secondName,
        };
    }

    readonly _name: string;
    readonly _secondName: string;
    readonly _age: number;
}

/*
1. Напишите конструктор, который принимает в качестве параметра объект с интерфейсом IStudentData
2. Добавьте метод getData(), возвращающий объект, соответствующий интерфейсу IStudentData
 */
export class Student extends Person {
    constructor(studentData: IStudentData) {
        super(studentData);
        this._phone = studentData.phone;
    }

    public getData(): IStudentData {
        return { ...super.getData(), phone: this._phone };
    }

    readonly _phone: string;
}
