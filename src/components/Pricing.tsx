
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function Pricing(){ 
    return(
        <>
            <h2 className="text-7xl font-bold tracking-tight text-gray-900 sm:text-7xl text-center pt-44">Pricing</h2>
            <div className="grid grid-cols-3 gap-8 pt-20 px-24">
                <Card className="flex flex-col justify-between">
                    <CardHeader>
                        <CardTitle>Test Card</CardTitle>
                        <CardDescription>test description</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Example content for card goes here</p>
                    </CardContent>
                    <CardFooter>
                        <p>Footer content goes here</p>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Test Card</CardTitle>
                        <CardDescription>test description</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Example content for card goes here</p>
                    </CardContent>
                    <CardFooter>
                        <p>Footer content goes here</p>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Test Card</CardTitle>
                        <CardDescription>test description</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Example content for card goes here</p>
                    </CardContent>
                    <CardFooter>
                        <p>Footer content goes here</p>
                    </CardFooter>
                </Card>
            </div>
        </>
    )
}
