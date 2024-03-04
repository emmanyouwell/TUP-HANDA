import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { Link } from "react-router-dom";
  export function DashboardCards({icon, title, data, textColor, bgColor, link}) {
    return (
      <Card className="mt-6 w-96" style={{backgroundColor: bgColor, color: textColor}}>
        <CardBody className="relative">
        <i className={`fa-solid ${icon} text-6xl p-4 absolute right-0`} style={{color: textColor}}></i>
          <Typography variant="h3" className="mb-2">
            {title}
          </Typography>
          <Typography variant="h1" className="mb-2">
            {data}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Link to={link} className="inline-block">
            <Button size="sm" variant="text" className="flex items-center gap-2" style={{color: textColor}}>
                View more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </Link>
        </CardFooter>
      </Card>
    );
  }