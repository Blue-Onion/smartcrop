import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { schemes } from "@/lib/scheme";
import SchemeCard from "./_components/scheme-card";

const Page = () => {
    const scheme =schemes;

    return (
        <div className="p-10">
            <div className="flex flex-col gap-5 items-center justify-center">
                <div className="flex flex-col items-center">
                    <h2 className="gradient-title text-3xl md:text-4xl xl:text-6xl">
                        Government Scheme Advisory
                    </h2>
                    <p className="text-muted-foreground max-w-2xl sm:text-xs md:text-lg text-center">
                        Discover government schemes and check eligibility criteria.
                        AI-powered recommendations for the most suitable schemes for you.
                    </p>
                </div>

                <Card className="w-full">
                    <CardHeader>
                        <CardTitle className="text-2xl">
                            Government Schemes Advisory
                        </CardTitle>
                    </CardHeader>

                    <CardContent className={"space-y-8"}>
                        <div className="flex flex-col gap-4">
                            {/* Input for Scheme Name */}
                            <Input placeholder="Search by scheme name..." className="w-full" />
                            <div className="flex flex-col justify-between md:flex-row gap-4">
                                <div className="flex w-full md:w-1/2 flex-col gap-2 items-start">

                                    <Label htmlFor="category">Category</Label>
                                    <Select id="category" defaultValue="all">
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select Category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="all">All Categories</SelectItem>
                                            <SelectItem value="financial">Financial Support</SelectItem>
                                            <SelectItem value="insurance">Insurance</SelectItem>
                                            <SelectItem value="technical">Technical Support</SelectItem>
                                            <SelectItem value="subsidies">Subsidies</SelectItem>
                                            <SelectItem value="technology">Technology</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="flex w-full md:w-1/2 flex-col gap-2 items-start">
                                    <Label htmlFor="state">State</Label>
                                    {/* State Dropdown */}
                                    <Select id="state" defaultValue="all-india">
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select State" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="all-india">All India</SelectItem>
                                            <SelectItem value="kerala">Kerala</SelectItem>
                                            <SelectItem value="punjab">Punjab</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                        </div>
{/* Scheme Cards */}
{scheme.map(scheme=>(
<SchemeCard scheme={scheme} key={scheme.id}/>
))}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Page;
