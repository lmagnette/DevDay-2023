import { inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

export const getRouteParams$ = (name:string) =>{
  const params = inject(ActivatedRoute).paramMap;
  return params.pipe(map(params => params.get(name)));
}
