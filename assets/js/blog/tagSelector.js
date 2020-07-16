var tagNames = new Array();
var selectedTag = null;
var hiddenTags = null;

// Set up onPageLoad to be called after the page has loaded
if(window.attachEvent) {
    window.attachEvent('onload', onPageLoad);
} else {
    if(window.onload) {
        var curronload = window.onload;
        var newonload = function(evt) {
            curronload(evt);
            onPageLoad();
        };
        window.onload = newonload;
    } else {
        window.onload = onPageLoad;
    }
}

// Scrape the page for tag names
function onPageLoad() {
    tags = document.getElementsByClassName('blog-tag');
    Array.prototype.forEach.call(tags, function(tag) {
        tagNames.push(tag.title);
    });
}

// Called on tag select
function tagSelect(value) {
    // Show hidden tags
    updateDisplayOfTags('initial');
    // Get tags to hide by removing selected tag from list of all tags
    hiddenTags = [...tagNames];
    hiddenTags.remove(value);
    // Hide the other tags
    updateDisplayOfTags('none');
    // Store selected tag
    selectedTag = value;
};

// Update the display of hidden tags
function updateDisplayOfTags(value) {
    if (hiddenTags == null)
        return;
    Array.prototype.forEach.call(hiddenTags, function(tag) {
        posts = document.getElementsByClassName(tag);
        Array.prototype.forEach.call(posts, function(post) {
            post.style.display = value;
        });
    });
}

// Method to remove from array by value
Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};
