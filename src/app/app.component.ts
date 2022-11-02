// app.component.ts
import { Component } from "@angular/core";
import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter";

const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: 'IIzmbjKhepHLitTYfKVHYlYPShSu6SrA', // Be sure to use an API key that only allows searches, in production
    nodes: [
      {
        host: 'k3l8dc15b2g6e4yqp-1.a1.typesense.net',
        port: 443,
        protocol: 'https',
      },
    ],
  },
  // The following parameters are directly passed to Typesense's search API endpoint.
  //  So you can pass any parameters supported by the search endpoint below.
  //  query_by is required.
  additionalSearchParameters: {
    query_by: "title,authors",
  },
});
const searchClient = typesenseInstantsearchAdapter.searchClient;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  config = {
    indexName: "books",
    searchClient,
   
    // transformHits(hits) {
    //   hits.forEach(hit => {
    //     hit.stars = [];
    //     for (let i = 1; i <= 5; i) {
    //       hit.stars.push(i <= hit.rating);
    //       i += 1;
    //     }
    //   });
    //   return hits;
    // }
  };
  
  
 
}

//console.log(searchClient);