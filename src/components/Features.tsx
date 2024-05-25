"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Features() {
  return (
    <>
      <h2
        id="features"
        className="text-7xl pt-52 font-bold tracking-tight text-gray-900 sm:text-7xl text-center "
      >
        Features
      </h2>
      <div className="relative grid grid-cols-4 gap-8 pt-20 px-44">
        <Card className="flex flex-col justify-between border-2 py-4">
          <CardHeader>
            <CardTitle className="font-extrabold">
              General Maintenance
            </CardTitle>
          </CardHeader>
          <CardContent className="font-normal">
            <ul>
              <li>&#8226; copy about gen maintenance</li>
              <li>&#8226; copy about gen maintenance</li>
              <li>&#8226; Rental property...</li>
              <li>&#8226; copy</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="flex flex-col justify-between border-2 py-4">
          <CardHeader>
            <CardTitle className="font-extrabold">Project Clean</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              <li>copy</li>
              <li>copy</li>
              <li>copy</li>
              <li>copy</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="flex flex-col justify-between border-2 py-4">
          <CardHeader>
            <CardTitle className="font-extrabold">Move in/Move out</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              <li>copy</li>
              <li>copy</li>
              <li>copy</li>
              <li>copy</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="flex flex-col justify-between border-2 py-4">
          <CardHeader>
            <CardTitle className="font-extrabold">Deep Clean</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              <li>With or without Appliances</li>
              <li>copy</li>
              <li>copy</li>
              <li>copy</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
