"use server";

export async function getCropData(formData) {
  // Extract values from form
  const landAcre = Number(formData.get("landAcre"));
  const cropType = formData.get("cropType");

  // Hardcoded crop data (dummy backend)
  const cropRates = {
    rice: { revenuePerAcre: 80000, costPerAcre: 50000 },
    wheat: { revenuePerAcre: 60000, costPerAcre: 35000 },
    cotton: { revenuePerAcre: 90000, costPerAcre: 60000 },
    sugarcane: { revenuePerAcre: 120000, costPerAcre: 80000 },
  };

  // Validation
  if (!landAcre || landAcre <= 0 || !cropType) {
    return {
      success: false,
      error: "Invalid input. Please provide landAcre > 0 and a valid cropType.",
    };
  }

  const rates = cropRates[cropType.toLowerCase()];
  if (!rates) {
    return {
      success: false,
      error: `Unknown crop type: ${cropType}`,
    };
  }

  // Calculations
  const revenue = landAcre * rates.revenuePerAcre;
  const totalCost = landAcre * rates.costPerAcre;
  const netSale = revenue - totalCost;
  const profitMargin = revenue > 0 ? (netSale / revenue) * 100 : 0;

  return {
    success: true,
    data: {
      cropType,
      landAcre: landAcre.toFixed(2),
      revenue: revenue.toFixed(2),
      totalCost: totalCost.toFixed(2),
      netSale: netSale.toFixed(2),
      profitMargin: profitMargin.toFixed(2),
    },
  };
}
