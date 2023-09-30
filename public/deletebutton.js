document.querySelectorAll(".delete-post-button").forEach((button) => {
  button.addEventListener("click", function (event) {
    const postId = event.target.getAttribute("data-id");
    fetch(`/dashboard/delete/${postId}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok) {
        location.reload();
      } else {
        alert("Failed to delete post");
      }
    });
  });
});
