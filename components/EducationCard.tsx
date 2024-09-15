import React from "react";
import { Card, CardBody, Badge } from "reactstrap";
import { EducationType } from "../types/sections";

const EducationCard = ({ schoolName, subHeader }: EducationType) => {
  return (
    <Card className="shadow-lg--hover shadow mt-2">
      <CardBody>
        <div className="d-flex px-4">
          <div className="pl-4 pb-4">
            <h5 className="text-info">{schoolName}</h5>
            <h6>{subHeader}</h6>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default EducationCard;
