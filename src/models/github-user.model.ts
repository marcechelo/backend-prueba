import {Entity, model, property} from '@loopback/repository';

@model()
export class GithubUser extends Entity {
  @property({
    type: 'string',
    generated: true,
    id: true,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  login: string;

  @property({
    type: 'string',
    required: true,
  })
  userId: string;

  @property({
    type: 'string',
    required: true,
  })
  created_at: string;

  @property({
    type: 'number',
    required: true,
  })
  owned_private_repos: number;

  @property({
    type: 'number',
    required: true,
  })
  public_repos: number;

  @property({
    type: 'number',
    required: true,
  })
  total_private_repos: number;

  @property({
    type: 'string',
    required: true,
  })
  url: string;


  constructor(data?: Partial<GithubUser>) {
    super(data);
  }
}

export interface GithubUserRelations {
  // describe navigational properties here
}

export type GithubUserWithRelations = GithubUser & GithubUserRelations;
