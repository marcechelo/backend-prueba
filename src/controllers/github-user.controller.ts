import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param,


  patch, post,




  put,

  requestBody,
  response
} from '@loopback/rest';
import {GithubUser} from '../models';
import {GithubUserRepository} from '../repositories';

export class GithubUserController {
  constructor(
    @repository(GithubUserRepository)
    public githubUserRepository: GithubUserRepository,
  ) { }

  @post('/github-users')
  @response(200, {
    description: 'GithubUser model instance',
    content: {'application/json': {schema: getModelSchemaRef(GithubUser)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(GithubUser, {
            title: 'NewGithubUser',

          }),
        },
      },
    })
    githubUser: GithubUser,
  ): Promise<GithubUser> {
    return this.githubUserRepository.create(githubUser);
  }

  @get('/github-users/count')
  @response(200, {
    description: 'GithubUser model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(GithubUser) where?: Where<GithubUser>,
  ): Promise<Count> {
    return this.githubUserRepository.count(where);
  }

  @get('/github-users')
  @response(200, {
    description: 'Array of GithubUser model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(GithubUser, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(GithubUser) filter?: Filter<GithubUser>,
  ): Promise<GithubUser[]> {
    return this.githubUserRepository.find(filter);
  }

  @patch('/github-users')
  @response(200, {
    description: 'GithubUser PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(GithubUser, {partial: true}),
        },
      },
    })
    githubUser: GithubUser,
    @param.where(GithubUser) where?: Where<GithubUser>,
  ): Promise<Count> {
    return this.githubUserRepository.updateAll(githubUser, where);
  }

  @get('/github-users/{id}')
  @response(200, {
    description: 'GithubUser model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(GithubUser, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: string,
    @param.filter(GithubUser, {exclude: 'where'}) filter?: FilterExcludingWhere<GithubUser>
  ): Promise<GithubUser> {
    return this.githubUserRepository.findById(id, filter);
  }

  @patch('/github-users/{id}')
  @response(204, {
    description: 'GithubUser PATCH success',
  })
  async updateById(
    @param.path.number('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(GithubUser, {partial: true}),
        },
      },
    })
    githubUser: GithubUser,
  ): Promise<void> {
    await this.githubUserRepository.updateById(id, githubUser);
  }

  @put('/github-users/{id}')
  @response(204, {
    description: 'GithubUser PUT success',
  })
  async replaceById(
    @param.path.number('id') id: string,
    @requestBody() githubUser: GithubUser,
  ): Promise<void> {
    await this.githubUserRepository.replaceById(id, githubUser);
  }

  @del('/github-users/{id}')
  @response(204, {
    description: 'GithubUser DELETE success',
  })
  async deleteById(@param.path.number('id') id: string): Promise<void> {
    await this.githubUserRepository.deleteById(id);
  }
}
