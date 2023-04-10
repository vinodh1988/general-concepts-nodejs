class Employee {
    constructor(sno, name, city) {
        this.sno = sno;
        this.name = name;
        this.city = city;
    }
    display() {
        console.log(this.sno, this.name, this.city);
    }
}
