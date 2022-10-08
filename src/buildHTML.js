const Engineer = require("../lib/Engineer");

let employeeHtmlArr = [];

const buildHTML = (employees) => {

    const top = `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <title>Team Profiles</title>
    </head>
    <body>
    <main class='container-flex'>
    <div class="row">
        <h1 class="col bg-danger text-center py-5 text-light fw-bold">My Team</h1>
    </div>

    <div class="row justify-content-center px-5">`

    employeeHtmlArr = employees.map(employee=>{console.log('I am in')
        if(employee.getRole() == 'Manager'){
            return `<div class="col-lg-2 col-md-4 col-sm-5">
            <div class="card shadow">
                <h2 class="card-header bg-primary text-light fw-semibold fs-4">${employee.getName()}<br><i class="fa-solid fa-mug-hot mx-2"></i><span class="fs-5">Manager</span></h2>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${employee.getId()}</li>
                        <li class="list-group-item">Email: <a href='mailto:${employee.getEmail()}'>${employee.getEmail()}</a></li>
                        <li class="list-group-item">Office Number: ${employee.getOfficeNumber()}</li>
                      </ul>                        
                </div>
          </div>
        </div>`
        };
        if(employee.getRole() == 'Engineer'){
            return `<div class="col-lg-2 col-md-4 col-sm-5">
            <div class="card shadow">
                <h2 class="card-header bg-primary text-light fw-semibold fs-4">${employee.getName()}<br><i class="fa-solid fa-glasses mx-2"></i><span class="fs-5">Engineer</span></h2>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${employee.getId()}</li>
                        <li class="list-group-item">Email: <a href='mailto:${employee.getEmail()}'>${employee.getEmail()}</a></li>
                        <li class="list-group-item">Github: <a href="https://www.github.com/${employee.getGithub()}">${employee.getGithub()}</a></li>
                      </ul>                        
                </div>
          </div>
        </div>`
        };
        if(employee.getRole() == 'Intern'){
            return `<div class="col-lg-2 col-md-4 col-sm-5">
            <div class="card shadow">
                <h2 class="card-header bg-primary text-light fw-semibold fs-4">${employee.getName()}<br><i class="fa-solid fa-graduation-cap mx-2"></i><span class="fs-5">Intern</span></h2>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${employee.getId()} </li>
                        <li class="list-group-item">Email: <a href='mailto:${employee.getEmail()}'>${employee.getEmail()}</a> </li>
                        <li class="list-group-item">School: ${employee.getSchool()}</li>
                      </ul>                        
                </div>
          </div>
        </div>`
        };

    });

    const bottom = `</div>
    </main>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
    </body>
</html>`


    return top + employeeHtmlArr.join('') + bottom;

}

module.exports = buildHTML