import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../assets/blog22.jpg'

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor/>
          <div className="post-detail__buttons">
            <Link to={`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
            <Link to={`/posts/werwer/delete`} className='btn sm danger'>Delete</Link>
          </div>
        </div>
        <h1>This is the post title</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt=''/>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit asperiores nobis, laboriosam rem dignissimos deleniti consequuntur, veniam nulla soluta esse ad modi sunt nihil adipisci qui ex eaque quas eveniet possimus optio sapiente officiis sequi vitae. Tempore, rem. Aperiam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat veniam pariatur deleniti ipsum aut aperiam, ad totam soluta facere. Animi explicabo unde officia eum itaque voluptate tenetur dolorum nostrum fugit? Fugiat mollitia laboriosam iure tempora sit debitis quas. Corrupti, nesciunt modi? Quod explicabo minima molestias praesentium eveniet ea reiciendis deleniti iusto. Tenetur illum iure temporibus?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi blanditiis, tempore tenetur aut doloribus non cum laborum, amet voluptate neque eius suscipit corrupti fugiat consectetur esse inventore laudantium molestias placeat alias reprehenderit modi hic voluptatem eveniet aliquid. Eligendi iusto accusamus minima incidunt vitae totam, voluptatibus, dolore ipsam enim dolores explicabo accusantium nemo. Temporibus autem consequatur nihil voluptas facere illum veniam quos laudantium tenetur magni pariatur a ipsam perferendis nobis fugit, dolore neque fugiat est ea alias deserunt eius officiis quisquam culpa! Necessitatibus, nobis eum nemo vitae assumenda ipsam voluptates sunt officia omnis ea eligendi mollitia numquam debitis non blanditiis neque, iusto dolore! Totam ullam esse repellendus quisquam non et ut.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aliquid, quaerat laudantium rem eum, hic qui corporis iusto temporibus mollitia cumque officiis perspiciatis iure eos?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia iste vero optio magni culpa veniam, deserunt ullam odio similique, animi ex sequi assumenda repellat voluptatum dignissimos nemo dolore sapiente eveniet consequatur. Mollitia ducimus quos officia itaque repudiandae necessitatibus blanditiis maiores, accusamus dolore, enim placeat! Voluptates hic explicabo rerum corrupti, perspiciatis labore non sint quae quibusdam saepe sequi sit at, provident ipsam eveniet recusandae, fugiat earum? Illo, eos voluptates optio sit veniam reprehenderit nemo amet doloremque. Tenetur inventore beatae maiores magni dolorem itaque distinctio voluptates iure doloremque, sint cupiditate quia dicta error reiciendis eveniet quas voluptatibus illum, eius, pariatur aliquam qui ad enim debitis culpa. Dolor assumenda fugit non expedita architecto ratione voluptate adipisci et aut reiciendis asperiores perspiciatis, est atque molestias, unde veritatis, deleniti vero pariatur! Quos temporibus minus nesciunt earum possimus commodi! Ad dolores iure quas corporis dolorem tempore recusandae illo magnam tenetur, explicabo aliquid beatae dolor, reiciendis quos! Ducimus animi placeat consequuntur dolor iusto, accusantium sit est aperiam optio ratione sed, et, officia neque pariatur doloribus soluta! Molestiae, tempora? Excepturi perferendis repellat, eos voluptatem sequi eaque nisi, animi provident aspernatur iusto incidunt, facilis quos ab doloribus molestiae ipsa voluptatibus explicabo. Tenetur earum enim sunt dignissimos aliquid ab cumque.
        </p>
      </div>
    </section>
  )
}

export default PostDetail