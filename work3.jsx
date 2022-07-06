// <!-- <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="stylesheet" href="work2.css">
//     <title>Document</title>
// </head>

// <body>
//     <div class="news-list">
//         <ul id="newli">
//         </ul>
//     </div>


// </body>
// <script type="module">
//     const basicURL = "https://hacker-news.firebaseio.com/v0/";
//     const tops = await fetch(`${basicURL}topstories.json?print=pretty`).then(res => res.json())
//     const list = tops.slice(0, 10)
//     const newsList = document.getElementById("newli")
//     for (const itemID of list) {
//         const story = await fetch(`${basicURL}item/${itemID}.json?print=pretty`).then(res => res.json())
//         const li = document.createElement("li")
//         const score = document.createElement("span")

//         score.className = "score"
//         score.innerText = story.score
//         const title = document.createElement("span")
//         title.className = "title"
//         const titleLink = document.createElement("a")
//         titleLink.innerText = story.title
//         titleLink.href = story.url
//         titleLink.target = "_blank"
//         title.append(titleLink)
//         const host = document.createElement("span")
//         const hostname = new URL(story.url).host
//         host.innerText = `(${hostname})`
//         title.append(host)
//         const changeL =document.createElement("br")
//         title.append(changeL)
//         const meta = document.createElement("span")
//         meta.className = "meta"
//         const by = document.createElement("span")
//         by.innerText = "by"
//         const byAuthor = document.createElement("a")
//         byAuthor.innerText = story.by
//         by.append(byAuthor)
//         const now = Math.floor(new Date().getTime() / 1000)
//         const past = now - story.time
//         const time = document.createElement("span")
//         time.className = "time"
//         time.innerText = `${past} seconds ago`
//         //
//         const delimeter = document.createElement("span")
//         delimeter.innerText = "|"
//         const comments = document.createElement("span")
//         comments.innerText = `${story.kids.length} comments`
//         comments.className = "comments"
//         meta.append(by, time, delimeter, comments)
//         li.append(score, title, meta)
//         newsList.append(li)
//     }
// </script>

// </html> -->
import { useState } from 'react'
import { useEffect } from 'react';

function App() {
  const data = [{ id: 1, name: "学习课程" },
  { id: 2, name: "完成作业" },
  { id: 3, name: "阅读学习资料" },
  { id: 4, name: "看一看胜古朝阳" },
  ]

  const [tasks, setTasks] = useState(data);
  const [newTask, setNewTask] = useState("");
  function handleClick(event) {
    // var NewID = 0;
    // for (var index in tasks) {
    //   if (NewID < tasks[index].id) NewID = tasks[index].id;
    // }
    // NewID = NewID +1;
    // var NewID = Math.max.apply(0,tasks.map(item=>item.id)) + 1;

    // var NewID = tasks.map(item => item.id).reduce((acc, item) => Math.max(acc, item)) + 1;
    var NewID = 1 + tasks.map(item => item.id).reduce((acc, item) => Math.max(acc, item),0) || 0;
    //console.log("NewID = " + NewID )


    setTasks([...tasks, { id: NewID, name: newTask }]);
  }
  function handleDeleteTask(TaskID) {
    setTasks(tasks.filter(e => e.id != TaskID));
  }

  useEffect(() => {
    setNewTask("");
  }, [tasks])

  return (<>
    <div>
      <p>我的待办列表</p>
      <ul>
        {tasks.map((item) => {
          return (
            <li key={item.id}>
              <span onClick={() => { handleDeleteTask(item.id) }}>[x]</span>
              {item.name}</li>)
        }
        )}
      </ul>
    </div>
    <div>
      <input type="text" value={newTask} onChange={(event) => { setNewTask(event.target.value); }} />
      <button type="button" onClick={handleClick} >添加任务</button>
    </div>
  </>
  )
}

export default App
