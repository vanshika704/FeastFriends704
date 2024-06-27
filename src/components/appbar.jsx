import "../index.css";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

function AppBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-black"> 
      <div className="container-fluid">
      <div className="FeastFriends">Feast Friends</div>
       
        <Breadcrumb spacing="10px" separator=" " className="breadcrumb-container">
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Explore</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Partner</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">About</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Contact</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
    </nav>
  );
}

export default AppBar;
