
// create a base class in index.js named Vehicle that all other vehicles will derive behaviors and properties from!

class Vehicle {
    constructor(model){
        this.model = model
    }
    drive(){
        return `${this.model} drives`
    }
}

// build the rest of the classes on your own, all tests will be green if you are done!

class Sedan extends Vehicle {
    constructor(model, backupCamera){
        super(model)
        this.backupCamera = backupCamera
    }

}

class Suv extends Vehicle {
    constructor(model, offroadPackage){
        super(model)
        this.offroadPackage = offroadPackage
    }

}

class Truck extends Vehicle {
    constructor(model, towingCapacity){
        super(model)
        this.towingCapacity = towingCapacity
    }

}

class EVSedan extends Sedan {
    constructor(model, backupCamera){
        super(model)
        this.backupCamera = backupCamera
    }

    recharge(){
        return `${this.model} recharges`
    }
}