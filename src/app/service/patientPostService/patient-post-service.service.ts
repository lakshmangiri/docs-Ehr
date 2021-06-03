import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { patientData } from 'src/app/model/patientData.model';

@Injectable({
  providedIn: 'root'
})
export class PatientPostServiceService {
  private posts: patientData[] =[];
  private postUpdated = new Subject<patientData[]>();

  constructor(private http: HttpClient, private router: Router){}

  getPosts()
  {
    this.http.get<{ message: string; posts: any }>("http://localhost:3000/api/posts")
    .pipe(
      map(postData => {
        return postData.posts.map(post => {
          return {
            id: post._id,
            title: post.title,
            name: post.name,
            emailId: post.emailId,
            contactNo: post.contactNo,
            gender: post.gender,
            martialStatus: post.martialStatus,
            dob: post.dob,
            age: post.age,
            weight: post.weight,
            height: post.height,
            bmi: post.bmi,
            bloodGroup: post.bloodGroup,
            alcoholConsumption: post.alcoholConsumption,
            smokingHabits: post.smokingHabits,
            allergies: post.allergies,
            currentMedications: post.currentMedications,
            pastMedications: post.pastMedications
          };
        });
      })
    ).subscribe(transformedPosts => {
      this.posts = transformedPosts;
      this.postUpdated.next([...this.posts]);
    });
  }

  getPostUpdateListener()
  {
    return this.postUpdated.asObservable();
  }

  getPost(id: string)
  {
    return this.http.get<{
      _id: string;
      title: string;
      name: string;
      emailId: string;
      contactNo: string;
      gender: string;
      martialStatus: string;
      dob: string;
      age: string;
      weight: string;
      height: string;
      bmi: string;
      bloodGroup: string;
      alcoholConsumption: string;
      smokingHabits: string;
      allergies: string;
      currentMedications: string;
      pastMedications: string;
    }>("http://localhost:3000/api/posts/" + id);
  }

  addPost(
    title: string,
    name: string,
    emailId: string,
    contactNo: string,
    gender: string,
    martialStatus: string,
    dob: string,
    age: string,
    weight: string,
    height: string,
    bmi: string,
    bloodGroup: string,
    alcoholConsumption: string,
    smokingHabits: string,
    allergies: string,
    currentMedications: string,
    pastMedications: string
  ){
    const post: patientData = {
      id: null,
      title: title,
      name: name ,
      emailId: emailId,
      contactNo: contactNo,
      gender: gender,
      martialStatus: martialStatus,
      dob: dob,
      age: age,
      weight: weight,
      height: height,
      bmi: bmi,
      bloodGroup: bloodGroup,
      alcoholConsumption: alcoholConsumption,
      smokingHabits: smokingHabits,
      allergies: allergies,
      currentMedications: currentMedications,
      pastMedications: pastMedications
    };
    this.http.post<{ message: string; postId: string}>(
      "http://localhost:3000/api/posts", post)
      .subscribe(responseData => {
        const id = responseData.postId;
        post.id = id;
        this.posts.push(post);
        this.postUpdated.next([...this.posts]);
        this.router.navigate(["/"]);
      });
  }

  updatePost(
    id: string,
    title: string,
    name: string,
    emailId: string,
    contactNo: string,
    gender: string,
    martialStatus: string,
    dob: string,
    age: string,
    weight: string,
    height: string,
    bmi: string,
    bloodGroup: string,
    alcoholConsumption: string,
    smokingHabits: string,
    allergies: string,
    currentMedications: string,
    pastMedications: string
  )
  {
    const post: patientData = {
      id: id,
      title: title,
      name: name,
      emailId: emailId,
      contactNo: contactNo,
      gender: gender,
      martialStatus: martialStatus,
      dob: dob,
      age: age,
      weight: weight,
      height: height,
      bmi: bmi,
      bloodGroup: bloodGroup,
      alcoholConsumption: alcoholConsumption,
      smokingHabits: smokingHabits,
      allergies: allergies,
      currentMedications: currentMedications,
      pastMedications: pastMedications
    };
    this.http.put("http://localhost:3000/api/posts/" + id, post)
    .subscribe(response => {
      const updatedPosts = [...this.posts];
      const oldPostIndex = updatedPosts.findIndex(p => p.id === post.id);
      updatedPosts[oldPostIndex] = post;
      this.posts = updatedPosts;
      this.postUpdated.next([...this.posts]);
      this.router.navigate(["/"]);
    });
  }

  deletePost(postId: string)
  {
    this.http.delete("http://localhost:3000/api/posts/" + postId)
    .subscribe(() => {
      const updatedPosts = this.posts.filter(post => post.id !== postId);
      this.posts = updatedPosts;
      this.postUpdated.next([...this.posts]);
    });
  }

}
