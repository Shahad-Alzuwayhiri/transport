// تعريف صنف المركبات
class Vehicle {
    constructor(name, manufacturer, vehicleId) {
        this.name = name;
        this.manufacturer = manufacturer;
        this.vehicleId = vehicleId;
    }
}

// تعريف صنف السيارة يرث من صنف المركبات
class Car extends Vehicle {
    constructor(name, manufacturer, vehicleId, carType) {
        super(name, manufacturer, vehicleId);
        this.carType = carType; // نوع السيارة (بنزين أو كهربائية)
    }
}

// تعريف صنف الطائرة يرث من صنف المركبات
class Plane extends Vehicle {
    constructor(name, manufacturer, vehicleId, planeType) {
        super(name, manufacturer, vehicleId);
        this.planeType = planeType; // نوع الطائرة
    }
}

// تعريف صنف الموظف
class Employee {
    constructor(name, employeeId, dateOfBirth) {
        this.name = name;
        this.employeeId = employeeId;
        this.dateOfBirth = dateOfBirth;
    }
}

// تعريف صنف السائق يرث من صنف الموظفين
class Driver extends Employee {
    constructor(name, employeeId, dateOfBirth, licenseId) {
        super(name, employeeId, dateOfBirth);
        this.licenseId = licenseId; // رقم رخصة السائق
    }
}

// تعريف صنف الطيار يرث من صنف الموظفين
class Pilot extends Employee {
    constructor(name, employeeId, dateOfBirth, licenseId) {
        super(name, employeeId, dateOfBirth);
        this.licenseId = licenseId; // رقم رخصة الطيار
    }
}

// تعريف صنف الحجز
class Reservation {
    constructor(reservationId, reservationDate, employee, vehicle) {
        this.reservationId = reservationId;
        this.reservationDate = reservationDate;
        this.employee = employee;
        this.vehicle = vehicle;
    }
}

// مصفوفة لتخزين الحجوزات
const reservations = [];

// إنشاء دالة لعملية الحجز والتأكد من توافق المركبة مع الموظف
function createReservation(employee, vehicle) {
    if ((employee instanceof Pilot && vehicle instanceof Car) || (employee instanceof Driver && vehicle instanceof Plane)) {
        console.log("No match between the employee and the vehicle.");
    } else {
        const reservationId = reservations.length + 1;
        const reservationDate = new Date();
        const reservation = new Reservation(reservationId, reservationDate, employee, vehicle);
        reservations.push(reservation);
        console.log("Reservation created successfully.");
    }
}

// تعريف بعض الكائنات
const car1 = new Car("Toyota", "Toyota Motors", 1, "Gas");
const car2 = new Car("Tesla", "Tesla Inc.", 2, "Electric");
const car3 = new Car("Ford", "Ford Motors", 3, "Gas");

const plane1 = new Plane("Boeing 737", "Boeing", 4, "Commercial");
const plane2 = new Plane("Airbus A320", "Airbus", 5, "Commercial");

const driver1 = new Driver("Ahmed", 101, "1990-01-15", "D12345");
const driver2 = new Driver("Salim", 102, "1985-06-10", "D67890");

const pilot1 = new Pilot("Khaled", 201, "1982-02-22", "P11223");
const pilot2 = new Pilot("Omar", 202, "1978-09-30", "P44556");

// اختبار عملية الحجز
createReservation(driver1, car1); // يتوافق
createReservation(pilot1, plane1); // يتوافق
createReservation(pilot1, car2); // لا يتوافق
createReservation(driver2, plane2); // لا يتوافق

// طباعة محتوى مصفوفة الحجوزات باستخدام map
reservations.map(reservation => {
    console.log(`Reservation ID: ${reservation.reservationId}, Date: ${reservation.reservationDate}, Employee: ${reservation.employee.name}, Vehicle: ${reservation.vehicle.name}`);
});
