// Drag-and-Drop Priority List
const taskList = document.getElementById('taskList');
let draggedItem = null;

// Add drag event listeners to all task items
document.querySelectorAll('.task-item').forEach(item => {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragend', handleDragEnd);
    item.addEventListener('dragover', handleDragOver);
    item.addEventListener('drop', handleDrop);
});

function handleDragStart(e) {
    draggedItem = this;
    this.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragEnd(e) {
    this.classList.remove('dragging');
    
    // Remove all drop indicators
    document.querySelectorAll('.task-item').forEach(item => {
        item.classList.remove('drag-over', 'drag-over-below');
    });
}

function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    
    // Clear previous indicators
    document.querySelectorAll('.task-item').forEach(item => {
        if (item !== draggedItem) {
            item.classList.remove('drag-over', 'drag-over-below');
        }
    });
    
    // Determine if we're dropping above or below
    const rect = this.getBoundingClientRect();
    const midpoint = rect.top + rect.height / 2;
    
    if (e.clientY < midpoint) {
        this.classList.add('drag-over');
        this.classList.remove('drag-over-below');
    } else {
        this.classList.add('drag-over-below');
        this.classList.remove('drag-over');
    }
}

function handleDrop(e) {
    e.preventDefault();
    
    // Remove indicators
    this.classList.remove('drag-over', 'drag-over-below');
    
    if (draggedItem === this) return;
    
    // Get the position of the drop target
    const rect = this.getBoundingClientRect();
    const midpoint = rect.top + rect.height / 2;
    
    // Insert dragged item before or after target
    if (e.clientY < midpoint) {
        // Insert before target
        this.parentNode.insertBefore(draggedItem, this);
    } else {
        // Insert after target
        this.parentNode.insertBefore(draggedItem, this.nextSibling);
    }
    
    // Update priority numbers
    updatePriorities();
}

function updatePriorities() {
    const items = document.querySelectorAll('.task-item');
    items.forEach((item, index) => {
        const prioritySpan = item.querySelector('.priority');
        prioritySpan.textContent = `${index + 1}.`;
    });
}

// Optional: Add keyboard support for accessibility
document.addEventListener('keydown', function(e) {
    const focused = document.activeElement;
    if (focused && focused.classList.contains('task-item')) {
        const items = Array.from(document.querySelectorAll('.task-item'));
        const currentIndex = items.indexOf(focused);
        
        if (e.key === 'ArrowDown' && currentIndex < items.length - 1) {
            e.preventDefault();
            const nextItem = items[currentIndex + 1];
            focused.parentNode.insertBefore(nextItem, focused);
            updatePriorities();
        } else if (e.key === 'ArrowUp' && currentIndex > 0) {
            e.preventDefault();
            const prevItem = items[currentIndex - 1];
            focused.parentNode.insertBefore(focused, prevItem);
            updatePriorities();
        }
    }
});

// Initial priority update
updatePriorities();

// Log reorder events (for debugging)
taskList.addEventListener('DOMNodeInserted', function() {
    console.log('List reordered!');
});