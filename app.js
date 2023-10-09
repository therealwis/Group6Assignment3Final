const express = require('express');
const mysql = require("mysql");
const Chart = require('chart.js');

const server = express();

server.set('view engine', 'ejs');
server.use(express.static('public'));
server.use(express.urlencoded({extended : true}));
server.use(express.static(__dirname + '/node_modules/chart.js/dist'));

server.get("/", (req, resp) => {
    resp.render("index");
});

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "group6",
    password: ""
});


connection.connect(function(err){
    if(!err) {
        console.log("Database is connected");
    } else {
        console.log("Error while connecting with database");
    }
});


server.get('/teachers', function(req, res){  
    
    connection.query("select * FROM teachers ",function(err,rows){
        if (err) throw err;
        else {
            obj = {print: rows};
            console.log(obj);

            res.render("teacher/teachers", obj);
        }
    });

});

server.post('/teachers/create', function(req, res){
    const teacher_fname = req.body.teacher_fname;
    const teacher_sname = req.body.teacher_sname;
    const teacher_gender = req.body.teacher_gender;
    
    connection.query("insert into teachers(firstname,surname, gender) values(?,?,?) ",[teacher_fname,teacher_sname,teacher_gender],function(err,rows,fields){
        if(!!err)
        {
          console.log("error", +err);
        }
        else
        {
            return res.redirect('/teachers');
        }
    });
});


server.get('/teachers/delete/:id',function(req,res){

    var id = req.params.id;
    
    connection.query("delete from teachers where id=?",[id],function(err,rows,fields){
  
      if(!!err)
      {
        console.log('Error' ,err);
      }
      else
      {
        console.log("record deleted");
        return res.redirect('/teachers');

      }
  
    });
  
})

server.get('/teachers/edit/:id', (req, res) => {
    const id = req.params.id;

    connection.query("select * FROM teachers WHERE id=?",[id],function(err,rows){
        if (err) throw err;
        else {
            obj = {print: rows};

            res.render("teacher/editTeachers", obj);
        }
    });

})

server.post('/teachers/edit/save/:id', function(req, res){
    const id = req.params.id;
    const teacher_fname = req.body.teacher_fname;
    const teacher_sname = req.body.teacher_sname;
    const teacher_gender = req.body.teacher_gender;
    
    connection.query("UPDATE teachers SET firstname=?, surname=?, gender=? WHERE id=?",[teacher_fname,teacher_sname,teacher_gender,id],function(err,rows,fields){
        if(!!err)
        {
          console.log("error", +err);
        }
        else
        {
            return res.redirect('/teachers/edit/'+id);
        }
    });
});


// Student Routes
server.get('/students', (req, res) => {
    connection.query("select * FROM students ",function(err,rows){
        if (err) throw err;
        else {
            obj = {print: rows};
            console.log(obj);

            res.render("student/students", obj);
        }
    });
});

server.get('/students/delete/:id',function(req,res){
    const id = req.params.id;
    
    connection.query("delete from students where id=?",[id],function(err,rows,fields){
  
      if(!!err)
      {
        console.log('Error' ,err);
      }
      else
      {
        console.log("record deleted");
        return res.redirect('/students');
      }
  
    });
})


server.get('/students/edit/:id', (req, res) => {
    const id = req.params.id;

    connection.query("select * FROM students WHERE id=?",[id],function(err,rows){
        if (err) throw err;
        else {
            obj = {print: rows};

            res.render("student/editStudent", obj);
        }
    });

})


server.post('/students/edit/save/:id', function(req, res){
    const id = req.params.id;
    const student_fname = req.body.student_fname;
    const student_sname = req.body.student_sname;
    const student_gender = req.body.student_gender;
    
    connection.query("UPDATE students SET firstname=?, surname=?, gender=? WHERE id=?",[student_fname,student_sname,student_gender,id],function(err,rows,fields){
        if(!!err)
        {
          console.log("error", +err);
        }
        else
        {
            return res.redirect('/students/edit/'+id);
        }
    });
});

server.post('/students/create', function(req, res){
    const student_fname = req.body.student_fname;
    const student_sname = req.body.student_sname;
    const student_gender = req.body.student_gender;

    connection.query("insert into students(firstname, surname, gender) values(?,?,?) ",[student_fname,student_sname,student_gender],function(err,rows,fields){
        if(!!err)
        {
          console.log("error", +err);
        }
        else
        {
           res.redirect('/students');
        }
    });
});


// Subject Routes
server.get('/subjects', (req, res) => {
    connection.query("select * FROM subjects ",function(err,rows){
        if (err) throw err;
        else {
            obj = {print: rows};
            
            res.render("subject/subjects", obj);
        }
    });
});

server.get('/subjects/delete/:id',function(req,res){
    const id = req.params.id;
    
    connection.query("delete from subjects where id=?",[id],function(err,rows,fields){
      if(!!err)
      {
        console.log('Error' ,err);
      }
      else
      {
        console.log("record deleted");
        return res.redirect('/subjects');
      }
  
    });
})


server.get('/subjects/edit/:id', (req, res) => {
    const id = req.params.id;

    connection.query("select * FROM subjects WHERE id=?",[id],function(err,rows){
        if (err) throw err;
        else {
            connection.query("select * FROM teachers",function(err,rowss){
                if (err) throw err;
                else {
                    
                    obj = {print: rows, teachers:rowss};
        
                    res.render("grade/editSubject", obj);
                }
            });
        }
    });
})


server.post('/subjects/edit/save/:id', function(req, res){
    const id = req.params.id;
    const teacher_id = req.body.teacher_id;
   
    connection.query("UPDATE subjects SET teacher_id=? WHERE id=?",[teacher_id,id],function(err,rows,fields){
        if(!!err)
        {
          console.log("error", +err);
        }
        else
        {
            return res.redirect('/subjects');
        }
    });
});

server.post('/add-subject', function(req, res){
    const subject_name = req.body.subject_name;   
    
    connection.query("insert into subjects(name) values(?) ",[subject_name],function(err,rows,fields){
        if(!!err)
        {
          console.log("error"+err);
        }
        else
        {
           res.redirect('/subjects');
    
        }
    });
});


//Grade Routes
server.get('/grades', (req, res) =>{
    connection.query("select * FROM students",function(err,rows){
        if (err) throw err;
        else {
            connection.query("select * FROM subjects",function(err,rowss){
                if (err) throw err;
                else {
                    connection.query("select * FROM grades",function(err,rowsss){
                        if (err) throw err;
                        else {
                            const obj = {students: rows, subjects: rowss, grades: rowsss};
                            
                            res.render('grade/index', obj);
                        }
                    });
                }
            });   
        }
    });
    
})

server.get('/students/grade/:id', (req, res) => {
    const id = req.params.id;
    connection.query("select * FROM students WHERE id = ?",[id],function(err,rows){
        if (err) throw err;
        else {
            connection.query("select * FROM subjects",function(err,rowss){
                if (err) throw err;
                else {
                    
                    obj = {students: rows, subjects:rowss};
        
                    res.render("grade/gradeStudent", obj);
                }
            });   
        }
    });
});

server.post('/enter-grades', function(req, res){
    const student_id = req.body.student_id;
    const subject_id = req.body.subject_id;
    const score = req.body.score;

    connection.query("insert into grades(subject_id,student_id,score) values(?,?,?) ",[subject_id,student_id,score],function(err,rows,fields){
        if(!!err)
        {
          console.log("error", +err);
        }
        else
        {
           res.redirect('/students/grade/'+student_id);
        }
    });
});



server.get('/reports', (req, res) => {
    
const averageGrades = {
    female: [],
    male: [],
};
    
    // Query for average grades in each subject for female students
    connection.query(
    `SELECT s.name AS subject_name, AVG(g.score) AS female_avg_grade FROM students st INNER JOIN grades g ON st.id = g.student_id INNER JOIN subjects s ON g.subject_id = s.id WHERE st.gender = 'F' GROUP BY s.id, s.name`,
    function (err, femaleAvgResults) {
        if (err) throw err;
        // Push the results into the female array of averageGrades
        averageGrades.female = femaleAvgResults.map((row) => ({
        subject_name: row.subject_name,
        female_avg_grade: row.female_avg_grade,
        }));
    
        // console.log(averageGrades);
        // Query for average grades in each subject for male students
        connection.query(
        `SELECT s.name AS subject_name, AVG(g.score) AS male_avg_grade FROM students st INNER JOIN grades g ON st.id = g.student_id INNER JOIN subjects s ON g.subject_id = s.id WHERE st.gender = 'M' GROUP BY s.id, s.name`,
        function (err, maleAvgResults) {
            if (err) throw err;
    
            // Push the results into the male array of averageGrades
            averageGrades.male = maleAvgResults.map((row) => ({
            subject_name: row.subject_name,
            male_avg_grade: row.male_avg_grade,
            }));

            const labels = averageGrades.female.map((entry) => entry.subject_name);
            const femaleGrades = averageGrades.female.map((entry) => entry.female_avg_grade);
            const maleGrades = averageGrades.male.map((entry) => entry.male_avg_grade);
            
            // // data for the bar chart
            var data = {
                labels: labels,
                datasets: [
                    {
                        label: 'Female Average Grades',
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        data: femaleGrades,
                    },
                    {
                        label: 'Male Average Grades',
                        backgroundColor: 'rgb(54, 162, 235)',
                        borderColor: 'rgb(54, 162, 235)',
                        data: maleGrades,
                    },
                ]
            };

            var options = {
                responsive: true,
                title: {
                    display: true,
                    text: 'Average Grades for all Subjects'
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            };          
    
            res.render('reports', {
                barChartData: data,
                barChartOptions: options,
            });
        }
        );
    }
);
               
});

server.get("/grades/:id/report-card", (req, resp) => {
    const id = req.params.id;
    connection.query("select * FROM students WHERE id = ? ", [id],function(err,rows){
        if (err) throw err;
        else {
            connection.query("select * FROM subjects",function(err,rowss){
                if (err) throw err;
                else {
                    connection.query("select * FROM grades WHERE student_id = ?", [id],function(err,rowsss){
                        if (err) throw err;
                        else {
                            const obj = {student: rows, subjects: rowss, grades: rowsss};
                            
                            resp.render("reportCard", obj);
                        }
                    });
                }
            });   
        }
    });
    
});

server.listen(3000, () => {
    console.log("Server started");
});
