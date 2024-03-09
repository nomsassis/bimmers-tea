class BimmersTea {
    constructor(teaName, teaType, origin, pricePerUnit) {
      this.teaName = teaName;
      this.teaType = teaType;
      this.origin = origin;
      this.pricePerUnit = pricePerUnit;
      this.inventory = 0;
    }
  
    restockInventory(quantity) {
      this.inventory += quantity;
      console.log(`Restocked ${quantity} units of ${this.teaName}.`);
    }
  
    sellTea(quantity) {
      if (this.inventory >= quantity) {
        this.inventory -= quantity;
        const totalPrice = quantity * this.pricePerUnit;
        console.log(`Sold ${quantity} units of ${this.teaName}. Total: $${totalPrice}`);
      } else {
        console.log(`Insufficient inventory for ${this.teaName}. Current stock: ${this.inventory}`);
      }
    }
  
    displayTeaInfo() {
      console.log(`
        Bimmers Tea Information:
        Tea Name: ${this.teaName}
        Tea Type: ${this.teaType}
        Origin: ${this.origin}
        Price per Unit: $${this.pricePerUnit}
        Inventory: ${this.inventory} units
      `);
    }
  }
  
  // Example usage
  const bimmersGreenTea = new BimmersTea('Green Tea', 'Green', 'China', 10);
  
  bimmersGreenTea.restockInventory(100);
  bimmersGreenTea.sellTea(30);
  bimmersGreenTea.displayTeaInfo();
  