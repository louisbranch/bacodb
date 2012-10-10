function(doc){
  if (doc.type === 'story') {
    var story = {
      title: doc.title,
      content. doc.content.slice(0,120),
      tags: doc.tags
    };
    emit(doc.createdAt, story);
  }
}
