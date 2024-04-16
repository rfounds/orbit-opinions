"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function Features(){
    return(
        <>
            <h2 id="features" className="text-7xl font-bold tracking-tight text-gray-900 sm:text-7xl text-center ">Features</h2>
            <div className="grid grid-cols-4 gap-8 pt-20 px-44">
                <Card className="flex flex-col justify-between border-2 py-4">
                    <CardHeader>
                        <CardTitle className="font-extrabold">Website</CardTitle>
                    </CardHeader>
                    <CardContent className="font-normal">
                        <ul>
                            <li>&#8226; Responsive design</li>
                            <li>&#8226; Modern styles and techniques</li>
                            <li>&#8226; E-Commerce integration</li>
                            <li>&#8226; Latest SEO standards</li>
                        </ul>
                    </CardContent>
                </Card>
                <Card className="flex flex-col justify-between border-2 py-4">
                    <CardHeader>
                        <CardTitle className="font-extrabold">Logo Design</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul>
                            <li>&#8226; Stunning visual identity</li>
                            <li>&#8226; Shipped in various styles</li>
                            <li>&#8226; Targeted to your needs</li>
                            <li>&#8226; Computer generated or hand drawn</li>
                        </ul>
                    </CardContent>
                </Card>
                <Card className="flex flex-col justify-between border-2 py-4">
                    <CardHeader>
                        <CardTitle className="font-extrabold">Free Consultation</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul>
                            <li>&#8226; Assigned your own agent</li>
                            <li>&#8226; Develop a relationship</li>
                            <li>&#8226; Jumpstart your branding strategy</li>
                            <li>&#8226; Learn from seasoned entrepreneurs</li>
                        </ul>
                    </CardContent>
                </Card>
                <Card className="flex flex-col justify-between border-2 py-4">
                    <CardHeader>
                        <CardTitle className="font-extrabold">Brand strategy</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul>
                            <li>&#8226; Develop your brand's strategy</li>
                            <li>&#8226; Get guidance from experts</li>
                            <li>&#8226; Build a strong foundation</li>
                            <li>&#8226; Work with financiers</li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}

