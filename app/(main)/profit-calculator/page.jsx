import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import CalculatorCard from "./_components/Calculator-card"

const page = () => {
  return (
    <div className="p-10">
      <div className="flex flex-col gap-5 items-center justify-center">
        <div className="flex flex-col items-center">
          <h2 className="gradient-title text-3xl md:text-4xl xl:text-6xl">
            Profit Calculator
          </h2>
          {/* hidden by default, only visible on lg+ */}
          <p className="hidden lg:block text-muted-foreground max-w-2xl md:text-lg text-center">
            Calculate costs and profits for different crops. Choose the most profitable crop for your farm.
          </p>
        </div>

        <div className="w-full">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Profit Calculator</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <CalculatorCard />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default page
