var fs = require("fs");
var Handlebars = require("handlebars");

module.exports = {
    render: render
};

function render(resume) {
    var css = fs.readFileSync(__dirname + "/style.css", "utf-8");
    var template = fs.readFileSync(__dirname + "/resume.template", "utf-8");
    return Handlebars.compile(template)({
        css: css,
        resume: resume
    });
}

Handlebars.registerHelper("nl2br", function(value) {
    return (value || "").replace(/\n/g, "</p><p>");
});

Handlebars.registerHelper("firstName", function(fullname) {
    return fullname.split(" ")[0];
});

Handlebars.registerHelper("lastName", function(fullname) {
    return fullname.split(" ")[1];
});

Handlebars.registerHelper("keywordsList", function(keywords) {
    return "(" + keywords.join(", ") + ")";
});
