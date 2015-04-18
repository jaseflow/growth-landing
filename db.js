var menuItems = exports.menuItems = [];

menuItems.push({text: 'Activity', icon: 'list-alt'});
menuItems.push({text: 'Videos',icon: 'file-video-o'});
menuItems.push({text: 'Modules',icon: 'file-text-o'});
menuItems.push({text: 'Settings',icon: 'wrench'});

var modules = exports.modules = [];

modules.push({
    code:'AHCARB301A',title:'Implement a tree maintenance program'
});
modules.push({
    code:'AHCARB302A',title:'Conduct tree inspections'
});
modules.push({
    code:'AHCARB308A',title:'Install cable and bracing'
});
modules.push({
    code:'AHCARB309A',title:'Implement a tree protection program'
});
modules.push({
    code:'AHCCHM303A',title:'Prepare and apply chemicals'
});
modules.push({
    code:'AHCCHM304A',title:'Transport, handle and store chemicals'
});

var courses = exports.courses = [];

courses.push({
    title: 'Parks and Gardens',
    level: 'Certificate III',
    code: 'AHC31010',
    duration: 3,
    modules: [
        modules[0],
        modules[1],
        modules[2],
        modules[3],
        modules[4],
        modules[5],
    ]
});


courses.push({
    title: 'Parks and Gardens',
    level: 'Certificate IV',
    code: 'AHC40510',
    duration: 3,
    modules: [
        modules[0],
        modules[1],
        modules[2],
        modules[3],
        modules[4],
        modules[5],
    ]
});

var users = exports.users = [];

users.push({
    firstName: 'Jack',
    lastName: 'Bird',
    company: 'Precision Landscaping',
    staff: [
        {
            firstName: 'Tim',
            lastName: 'Grant',
            email: 'jsncbt@gmail.com',
            id: 1,
            course: courses[1],
            modules: [
                {
                    title: modules[0].title,
                    code: modules[0].code,
                    progress: 100
                },
                {
                    title: modules[1].title,
                    code: modules[1].code,
                    progress: 80
                },
                {
                    title: modules[2].title,
                    code: modules[2].code,
                    progress: 0
                },
                {
                    title: modules[3].title,
                    code: modules[3].code,
                    progress: 0
                },
                {
                    title: modules[4].title,
                    code: modules[4].code,
                    progress: 0
                },
                {
                    title: modules[5].title,
                    code: modules[5].code,
                    progress: 0
                }
            ]
        },
        {
            firstName: 'Josh',
            lastName: 'Daniels',
            email: 'jsncbt@gmail.com',
            id: 2,
            course: courses[0],
            modules: [
                {
                    title: modules[0].title,
                    code: modules[0].code,
                    progress: 100
                },
                {
                    title: modules[1].title,
                    code: modules[1].code,
                    progress: 100
                },
                {
                    title: modules[2].title,
                    code: modules[2].code,
                    progress: 100
                },
                {
                    title: modules[3].title,
                    code: modules[3].code,
                    progress: 20
                },
                {
                    title: modules[4].title,
                    code: modules[4].code,
                    progress: 0
                },
                {
                    title: modules[5].title,
                    code: modules[5].code,
                    progress: 0
                }
            ]
        } 
    ]
});
